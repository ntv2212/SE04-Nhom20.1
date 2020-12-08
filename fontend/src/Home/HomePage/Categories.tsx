import React from 'react'
import { ScrollView, View } from 'react-native';
import Category from './Category'

const categories = [
    {
        id: "newin",
        title: "New in",
        color: "#FFE8E9"
    },
    {
        id: "summer",
        title: "Summer",
        color: "#F1E0FF"
    },
    {
        id: "activewear",
        title: "Active Wear",
        color: "#BFEAF5"
    },
    {
        id: "outlet",
        title: "Out let",
        color: "#F1E0FF"
    },
    {
        id: "accesories",
        title: "Accesories",
        color: "#FFE8E9"
    }
]
const Categories = () => {
    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {categories.map(categories => (
                    <Category key={categories.id} category={categories} />
                ))}
            </ScrollView>
        </View>

    );
}

export default Categories;