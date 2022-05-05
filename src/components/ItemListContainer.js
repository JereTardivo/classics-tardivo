import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Item from './Item'
import { ItemsData } from '../data/ItemsData'

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        const getItemsPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ItemsData)
            }, 2000);
        })

        getItemsPromise.then(data => {
            setItems(data)
        })
    }


    return (
        <>
            <div className="divide-y divide-slate-100" style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridGap: 10,
                gridAutoRows: "minmax(100, auto)"
            }}>
                <div style={{
                    gridColumn: "2/6",
                    gridRow: 4
                }}>
                    <ItemList>
                        {items.map((item) => (
                            <Item key={item.id} item={item} />
                        ))}
                    </ItemList>
                </div>
            </div>

        </>
    )
}

export default ItemListContainer




