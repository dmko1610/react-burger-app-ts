import React from "react";
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button';
import {Ingredient} from "../../../store/actions/actionTypes";

interface Props {
    ingredients: Ingredient,
    price: number,
    purchaseCancelled: any,
    purchaseContinued: any
}

const OrderSummary = (props: Props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey: string) => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                :{(props.ingredients as any)[igKey]}
            </li>;
        });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger"
                    clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success"
                    clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default OrderSummary;
