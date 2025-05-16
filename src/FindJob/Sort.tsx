import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box, Checkbox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance ', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];

const  Sort=()=> {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-sm' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          
          <div  onClick={()=>combobox.toggleDropdown()} className='border border-amber-50 flex px-2 py-1  cursor-pointer text-sm rounded-full'>
            {selectedItem} <IconAdjustments className='text-blue-700'/>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown >
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort;