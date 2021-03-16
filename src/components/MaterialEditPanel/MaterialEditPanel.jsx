import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TextInputField from 'components/common/form/TextInputField';
import ColorPicker from 'components/common/form/ColorPicker';
import NumberField from 'components/common/form/NumberField';
import DatePicker from 'components/common/form/DatePicker';
import { makeGetMaterialByIdSelector } from 'selectors/materials';

import './MaterialEditPanel.scss';

const MaterialEditPanel = ({ materialId }) => {
	const getMaterialById = makeGetMaterialByIdSelector();

	const material = useSelector((state) => getMaterialById(state, materialId));

	let materialEditPanelBody;
	if (material) {
		materialEditPanelBody = (
			<>
				<TextInputField id="name-field" label="Name" defaultInputValue={material.name} />
				<ColorPicker id="color-picker" label="Color" defaultColor={material.color} />
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
				/>
				<DatePicker id="delivery-date-picker" label="Delivery Date" defaultDate={material.deliveryDate} />
			</>
		);
	}

	return (
		<div className="material-edit-panel">
			{materialEditPanelBody}
		</div>
	);
};

MaterialEditPanel.propTypes = {
	materialId: PropTypes.string
};

MaterialEditPanel.defaultProps = {
	materialId: null
};

export default MaterialEditPanel;
