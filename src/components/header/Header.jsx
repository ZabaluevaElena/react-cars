import React, { useCallback, useState } from 'react';
import Sort from './Sort';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../assets/redux/action/filter';
import { setSearch } from '../../assets/redux/action/search';
import { debounce } from 'lodash';

const Header = () => {
    const dispatch = useDispatch();
    const {order} = useSelector(({ filter }) => filter);
    const [inputSearchValue, setInputSearchValue] = useState('');

    const sort = [
        { name: "по возрастанию", order: 'asc' },
        { name: "по убыванию", order: 'desc' },
      ];
    
    const onClickSort = (type) => {
        dispatch(setSortBy(type));
    }

    const handleInputChange = (value) => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    const debouncedGetResponse = useCallback(
        debounce(value => dispatch(setSearch(value)), 300),
        []
    );


    return (
        <div className="app__top-panel">
        <Sort items={sort} checked={order} onClickSort={(type) => onClickSort(type)} />
        <Search value={inputSearchValue} handleInputChange={(value) => handleInputChange(value)}/>
      </div>
    );
}

export default Header;


