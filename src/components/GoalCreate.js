import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { goalUpdate, goalCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class GoalCreate extends Component {

  onButtonPress() {
    const { name, year, reason, description } = this.props;
    this.props.goalCreate({ name, reason, year: year || '2017', description });
  }

  render() {
    return (
      <Card>

          <CardSection>
            <Input
              label="Name"
              placeholder="self discipline"
              value={this.props.name}
              onChangeText={value => this.props.goalUpdate({ prop: 'name', value })}
            />
          </CardSection>
          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.pickerTextStyle}>Year</Text>
            <Picker
              selectedValue={this.props.year}
              onValueChange={value => this.props.goalUpdate({ prop: 'year', value })}
            >
              <Picker.Item label="2017" value="2017" />
              <Picker.Item label="2018" value="2018" />
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2027" value="2027" />
              <Picker.Item label="2037" value="2037" />
              <Picker.Item label="2047" value="2047" />
              <Picker.Item label="2057" value="2057" />
            </Picker>
        </CardSection>
        <CardSection>
          <Input
            label="Reason"
            placeholder="Why?"
            value={this.props.reason}
            onChangeText={value => this.props.goalUpdate({ prop: 'reason', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="What I have to do for that:"
            placeholder="...concrete schedule"
            value={this.props.description}
            onChangeText={value => this.props.goalUpdate({ prop: 'description', value })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, year, reason, description } = state.goalForm;
  return { name, year, reason, description };
};

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect(mapStateToProps, { goalUpdate, goalCreate })(GoalCreate);
