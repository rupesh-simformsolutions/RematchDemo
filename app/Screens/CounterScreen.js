import React from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';

function CounterScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter</Text>
      <Button title="+" onPress={props.incrementAsync} />
      {props.isLoading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#512DF8" />
      ) : (
        <Text style={styles.count}>{props.count}</Text>
      )}
      <Button
        title="-"
        onPress={props.count > 0 ? props.decrementAsync : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  heading: {
    fontSize: 38,
    color: '#512DF8',
    letterSpacing: 4,
    marginBottom: 25,
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: '#512DF8',
    marginVertical: 25,
  },
  loader: {marginVertical: 38},
});

const mapStateToProps = (state) => ({
  count: state.count,
  isLoading: state.loading.models.count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAsync: () => dispatch.count.incrementAsync(1),
  decrementAsync: () => dispatch.count.decrementAsync(1),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
