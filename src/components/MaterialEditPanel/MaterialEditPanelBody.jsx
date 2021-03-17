/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, batch } from 'react-redux';
import TextInputField from 'components/common/form/TextInputField';
import ColorPicker from 'components/common/form/ColorPicker';
import NumberField from 'components/common/form/NumberField';
import DatePicker from 'components/common/form/DatePicker';
import { modifyMaterialThunk } from 'thunks/materials';

const MaterialEditPanelBody = ({ material }) => {
	const dispatch = useDispatch();

	// const [material.name, setMaterial.name] = useState(material.name);
	// const [material.color, setMaterial.color] = useState(material.color);
	// const [material.deliveryDate, setMaterial.deliveryDate] = useState(material.deliveryDate);
	// const [material.volume, setMaterial.volume] = useState(material.volume);
	// eslint-disable-next-line max-len
	//const [material.costPerCubicMeter, setMaterial.costPerCubicMeter] = useState(material.costPerCubicMeter);

	// useEffect(() => {
	// 	if (prevMaterialId === material.id) {
	// 		const modifiedMaterial = {
	// 			id: material.id,
	// 			name: material.name,
	// 			color: material.color,
	// 			deliveryDate: material.deliveryDate,
	// 			volume: material.volume,
	// 			costPerCubicMeter: material.costPerCubicMeter
	// 		};

	// 		batch(() => {
	// 			dispatch({
	// 				type: 'materials/modify',
	// 				payload: modifiedMaterial
	// 			});

	// 			dispatch(modifyMaterialThunk(modifiedMaterial));
	// 		});
	// 	}
	// }, [material.name, material.color, material.deliveryDate, material.volume, material.costPerCubicMeter]);

	const nameCallback = (name) => {
		const modifiedMaterial = {
			id: material.id,
			name,
			color: material.color,
			deliveryDate: material.deliveryDate,
			volume: material.volume,
			costPerCubicMeter: material.costPerCubicMeter
		};

		// setMaterial.name(name);

		batch(() => {
			dispatch({
				type: 'materials/modify',
				payload: modifiedMaterial
			});

			dispatch(modifyMaterialThunk(modifiedMaterial));
		});
	};

	const colorCallback = (color) => {
		const modifiedMaterial = {
			id: material.id,
			name: material.name,
			color,
			deliveryDate: material.deliveryDate,
			volume: material.volume,
			costPerCubicMeter: material.costPerCubicMeter
		};

		// setMaterial.color(color);

		batch(() => {
			dispatch({
				type: 'materials/modify',
				payload: modifiedMaterial
			});

			dispatch(modifyMaterialThunk(modifiedMaterial));
		});
	};

	const volumeCallback = (volume) => {
		const modifiedMaterial = {
			id: material.id,
			name: material.name,
			color: material.color,
			deliveryDate: material.deliveryDate,
			volume,
			costPerCubicMeter: material.costPerCubicMeter
		};

		// setMaterial.volume(volume);

		batch(() => {
			dispatch({
				type: 'materials/modify',
				payload: modifiedMaterial
			});

			dispatch(modifyMaterialThunk(modifiedMaterial));
		});
	};

	const costPerCubicMeterCallback = (costPerCubicMeter) => {
		const modifiedMaterial = {
			id: material.id,
			name: material.name,
			color: material.color,
			deliveryDate: material.deliveryDate,
			volume: material.volume,
			costPerCubicMeter
		};

		// setMaterial.costPerCubicMeter(costPerCubicMeter);

		batch(() => {
			dispatch({
				type: 'materials/modify',
				payload: modifiedMaterial
			});

			dispatch(modifyMaterialThunk(modifiedMaterial));
		});
	};

	const deliveryDateCallback = (deliveryDate) => {
		const modifiedMaterial = {
			id: material.id,
			name: material.name,
			color: material.color,
			deliveryDate,
			volume: material.volume,
			costPerCubicMeter: material.costPerCubicMeter
		};

		// setMaterial.deliveryDate(deliveryDate);

		batch(() => {
			dispatch({
				type: 'materials/modify',
				payload: modifiedMaterial
			});

			dispatch(modifyMaterialThunk(modifiedMaterial));
		});
	};

	return (
		<>
			<TextInputField
				id="name-field"
				label="Name"
				defaultInputValue={material.name}
				onChangeCallback={nameCallback}
			/>
			<ColorPicker
				id="color-picker"
				label="Color"
				defaultColor={material.color}
				onChangeCallback={colorCallback}
			/>
			<NumberField
				id="volume-field"
				label={(
					<>
						Volume (m
						<sup>3</sup>
						)
					</>
				)}
				defaultNumberValue={material.volume}
				min={0}
				onChangeCallback={volumeCallback}
			/>
			<NumberField
				id="cost-field"
				label={(
					<>
						Cost (USD per m
						<sup>3</sup>
						)
					</>
				)}
				step={0.10}
				defaultNumberValue={material.costPerCubicMeter}
				min={0}
				onChangeCallback={costPerCubicMeterCallback}
			/>
			<DatePicker
				id="delivery-date-picker"
				label="Delivery Date"
				defaultDate={material.deliveryDate}
				onChangeCallback={deliveryDateCallback}
			/>
		</>
	);
};

export default MaterialEditPanelBody;
