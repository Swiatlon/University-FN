import React, { useState, type RefObject } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DropDownMenuWithCheckboxes from 'components/shared/dropdownMenuWithCheckboxes/DropdownMenuWithCheckboxes';
import type { AgGridReact } from 'ag-grid-react';

interface IColumnVisibilityDropdownProps {
  columnsSettings: { field: string; headerName: string; hide: boolean }[];
  gridRef: RefObject<AgGridReact>;
}

const ColumnVisibilityDropdown: React.FC<IColumnVisibilityDropdownProps> = ({ columnsSettings, gridRef }) => {
  const [visibilityItems, setVisibilityItems] = useState(
    columnsSettings.map(colSettings => ({
      identifier: colSettings.field,
      label: colSettings.headerName,
      checked: !colSettings.hide,
    }))
  );

  const handleSetVisibility = (identifier: string, checked: boolean) => {
    if (gridRef.current) {
      gridRef.current.api.setColumnsVisible([identifier], checked);
    }
  };

  return (
    <DropDownMenuWithCheckboxes
      tooltipLabel="Visibility"
      items={visibilityItems}
      setItems={setVisibilityItems}
      onCheckboxChange={handleSetVisibility}
      startIcon={<VisibilityIcon />}
    />
  );
};

export default ColumnVisibilityDropdown;
