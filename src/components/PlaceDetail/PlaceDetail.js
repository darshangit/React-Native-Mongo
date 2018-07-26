import React from "react";
import { Modal, View, Image, Text, Button } from "react-native";

const placeDetail = props => {

    return (
    <Modal>
        <View>
            <Image source={props.selectedPlace.placeImage}/>
            <Text>{props.selectedPlace}</Text>
            <View>
                <Button>
                </Button>
                </View>
            </View>
        </Modal>
    )
};

export default PlaceDetail;