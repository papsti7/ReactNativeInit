import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

const CardSection = props => <View style={styles.containerStyle}>{props.children}</View>;

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CardSection };
