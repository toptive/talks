import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, ActivityIndicator } from 'react-native';
import { signin, signout } from './redux/reducers/authRedux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Root extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin = () => {
    const { username, password } = this.state;
    const { signin } = this.props;
    signin(username, password);
  }

  render() {
    const { isFeching, user, isLogin, errorMessage, signout } = this.props;
    if (isFeching) {
      return (<View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>)
    }

    return (
      <View style={styles.container}>
        {!isLogin ?
          <View>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
            {!!errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
             <Button
              title={'Login'}
              style={styles.input}
              onPress={this.onLogin}
            />
          </View>
        : <View>
            <Text style={{color: 'green'}}> Wellcome {user.firstName} {user.lastName}</Text>
             <Button
              title={'logout'}
              style={styles.input}
              onPress={signout}
            />
          </View>}
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

const mapStateToProps = store => ({
  isFeching: store.auth.isFeching,
  user: store.auth.user,
  isLogin: store.auth.isLogin,
  errorMessage: store.auth.errorMessage,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signin, 
      signout, 
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
