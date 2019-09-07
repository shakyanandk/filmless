import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import WheelInput from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../Constants/colors';

const sortMethods = [
  {label: 'Release Date', value: 'Release Date', color: colors.text01},
  {label: 'Rating', value: 'Rating', color: colors.text01},
  {label: 'Alphabetical', value: 'Alphabetical', color: colors.text01},
  {label: 'Runtime', value: 'Runtime', color: colors.text01},
  {label: 'Popularity', value: 'Popularity', color: colors.text01},
];

const Lister = props => {

  return (
    <View style={styles.lister}>
      <TouchableOpacity 
        onPress={props.setSortDirection}
        style={styles.sortDirectionButtonContainer}
      >
      <View style={styles.sortDirectionButton}>
        <Icon 
          color={props.sortDirection == 'des' ? colors.primary : colors.text01} 
          name="long-arrow-down" 
          size={22} 
        />
      </View>
      <View style={styles.sortDirectionButton}>
        <Icon 
          color={props.sortDirection == 'asc' ? colors.primary : colors.text01} 
          name="long-arrow-up" 
          size={22} 
        />
      </View>
      </TouchableOpacity>
      <View style={styles.sortMethodButtonContainer}>
        <View style={styles.sortMethodButton}>
          <Text style={styles.sortMethodPlaceHolder}>Sorted By </Text>
          <WheelInput
            style={wheelInputStyles}
            placeholder={{label: 'Date Added', color: colors.text01}}
            placeholderTextColor={colors.primary}
            items={sortMethods}
            value={props.sortMethod}
            onValueChange={sortMethod => props.setSortMethod(sortMethod)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lister: {
    flexDirection: 'row',
    paddingHorizontal: 28,
  },
  sortDirectionButtonContainer: {
    flexDirection: 'row',
    paddingVertical: 14
  },
  sortDirectionButton: {
    fontWeight: '200',
    paddingHorizontal: 2
  },
  sortMethodButtonContainer: {
    justifyContent: 'center',
    marginLeft: 'auto'
  },
  sortMethodButton: {
    flexDirection: 'row',
  },
  sortMethodPlaceHolder: {
    color: colors.text01,
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 14,
  }
});

const wheelInputStyles = StyleSheet.create({
  modalViewMiddle: {
    backgroundColor: colors.base02,
    borderTopWidth: 0,
  },
  modalViewBottom: {
    backgroundColor: colors.base02
  },
  chevronContainer: {
    opacity: 0.1
  },
  done: {
    color: colors.primary,
  },
  inputIOS: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 14,
  },
  inputAndroid: {
    color: colors.primary,
    marginLeft: 'auto',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 14,
  }
});

export default Lister;