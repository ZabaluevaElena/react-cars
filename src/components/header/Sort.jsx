import React from 'react';
const Sort = ({items, checked, onClickSort}) => {
    return (
        <div className="sort">
            <span className="sort__title">Сортировать цену:</span>
            {items.map((obj, index) => 
                <label key={index} htmlFor={`inpit_price_${obj.order}`} onClick={() => onClickSort(obj.order)}>
                    <input id={`inpit_price_${obj.order}`} type="radio" name="sort" defaultChecked={checked === obj.order} className="sort__input" />
                    <span className="sorl__label">{obj.name}</span>
                </label>
            )}
        </div>
    );
}

export default Sort;