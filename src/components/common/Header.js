// import
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

// create component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
  },
};

Header.defaultProps = {
  headerText: '',
};

Header.propTypes = {
  headerText: PropTypes.string,
};

// make component available to other parts of the app
export { Header };
