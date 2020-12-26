import React from "react";
import { Box } from "../../components";
import Icon from "react-native-vector-icons/Feather";
import CardLayout from "./CardLayout";

const AddCard = () => {
    return (
        <CardLayout onPress={() => true} backgroundColor="secondary">
            <Box
                flex={1}
                justifyContent="center"
                alignItems="center"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
                <Icon name="plus" color="white" size={32} />
            </Box>
        </CardLayout>

    );
};
export default AddCard;