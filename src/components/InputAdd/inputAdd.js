import react from "react";
import { TextInput, Button, View } from "react-native";

const InputAdd = (props) => {
    <View style={styles.inputContainer}>
      <TextInput
          placeholder={'An AWesome palce'}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeinput}
        />
        <Button title="Add" style={styles.placeButton}
        onPress={this.placeSubmitHandler}
        />
      </View>
}


export default InputAdd;
