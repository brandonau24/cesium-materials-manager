/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, batch } from 'react-redux';
import TextInputField from 'components/common/form/TextInputField';
import ColorPicker from 'components/common/form/ColorPicker';
import NumberField from 'components/common/form/NumberField';
import DatePicker from 'components/common/form/DatePicker';
import { modifyMaterialThunk } from 'thunks/materials';

import './MaterialEditPanelBody.scss';

const MaterialEditPanelBody = ({ material }) => {
	const dispatch = useDispatch();

	const nameCallback = (name) => {
		const modifiedMaterial = {
			...material,
			name
		};

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
			...material,
			color
		};

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
			...material,
			volume
		};

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
			...material,
			costPerCubicMeter
		};

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
			...material,
			deliveryDate
		};

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
				value={material.name}
				onChangeCallback={nameCallback}
			/>
			<ColorPicker
				className="circle"
				id="color-picker"
				label="Color"
				value={material.color}
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
				value={Number.parseFloat(material.volume)}
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
				value={Number.parseFloat(material.costPerCubicMeter)}
				min={0}
				onChangeCallback={costPerCubicMeterCallback}
			/>
			<DatePicker
				id="delivery-date-picker"
				label="Delivery Date"
				value={material.deliveryDate}
				onChangeCallback={deliveryDateCallback}
			/>
		</>
	);
};

export default MaterialEditPanelBody;
