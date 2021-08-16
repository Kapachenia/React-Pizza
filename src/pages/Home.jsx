import React from 'react';
import Categories from "../components/Categories";
import SortPopap from "../components/SortPopap";
import Index from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
]

const Home = () => {

    const dispatch = useDispatch();

    const {items} = useSelector((state) => {
        return {
            items: state.pizzas.items,
        }
    });

    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, []);

    const onSelectCategory = index => {
        dispatch(setCategory(index));
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}/>
                <SortPopap items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((i) => (
                    <Index key={i.id} name={i.name} price={i.price} imageUrl={i.imageUrl}
                           types={i.types} sizes={i.sizes}/>
                ))}
            </div>
        </div>
    )
}

export default Home;