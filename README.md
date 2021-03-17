# Cesium Materials Manager

I used node v12.18.2 at the time of implementing this. This projet definitely took me longer than 2-3 hours. If I were to guess, I probably spent a 10 hours on it.

My biggest mistake was probably spending an hour on the webpack configuration.

## How to run
1. In one terminal, go into the api directory and run `node api.js`. This will start the mock API server.
2. At the root of this project, start the webpack development server with `yarn dev` in another terminal instance.

## Outstanding Questions
* As a geospatial platform, I'm sure Cesium has dealt with requests from all over the world. Does that mean for the purpose of this exercise that USD currency is not the only currency to support?
* What are the designs for mobile view? Should every application at Cesium be developed with a mobile-friendly view?

## Design Decisions
* For updating the material on the fly, I essentially just hit the redux store and API on every keystroke/color/date change which you can see [in MaterialEditPanelBody](./src/components/MaterialEditPanel/MaterialEditPanelBody.jsx). This is obviously a performance bottleneck in the network layer since it is making a PUT request for every change. I would have liked to minimize the amount of network requests as much as possible, but for the purpose of this exercise, I left it alone.

* Instead of mapping each material to have its own editing panel, I wanted to render one panel and dynamically load in the data depending on the material t hat was clicked. What I've done was set in the store which material was clicked on (by ID) with my [currentMaterialIdReducer](./src/components/reducers/currentMaterialId.js). The action for this reducer gets fired off on every click by [MaterialListItem](./src/components/MaterialsList/MaterialListItem.jsx). Then, components depending on current material viewed can simply hook into Redux and pull out the ID.

* I wish my state was shaped better. This is what it looks like currently:
	```
		{
			materials: [
				...material objects
			],
			currentMaterialId
		}
	```
	I still think it is a pretty flat state which is good, but I just could not think of what to do name the actual array of materials inside the `materials` state value.

	The example below was going to be used, but `materials.items` just seemed redundant and unnecessary. This probably just boils down to semantics, but just wanted to voice design concerns.
	```
		{
			materials: {
				items: [],
				currentMaterialId
			}
		}
	```
* Should users be allowed to delete a material without confirmation? It seems unsafe to allow users to just delete without making sure that is the action they wanted.

## What I wish was completed
* Error states
	* My reducers, API calls, form fields do not handle any errors whatsoever. For this to be as robust as possible, there would need to be some form of error states for network requests, bad input data, etc.
* More unit tests (Hovering around ~75% statement coverage, ~91% branch coverage)
* Refactor [MaterialEditPanelBody component](./src/components/MaterialEditPanel/MaterialEditPanelBody.jsx) on the input change callbacks since they all look very similar.
