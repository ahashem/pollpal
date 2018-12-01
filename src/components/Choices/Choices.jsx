import React from 'react';
import PropTypes from 'prop-types';
import { List, Progress, Radio, Skeleton } from 'antd';
import Helpers from '../../utils/helpers';

const { Item } = List;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const Choices = ({ onChange, loading, choices }) => {
  return (
    <RadioGroup
      onChange={onChange}
    >
      <List
        itemLayout="horizontal"
        loading={loading}
        dataSource={choices}
        renderItem={choice => (
          <RadioButton
            value={choice.url}
            buttonStyle="solid"
          >
            <Item key={choice.url}>
              <Skeleton loading={loading} active>
                <Item.Meta
                  title={choice.choice}
                  description={`${choice.votes} votes`}
                />
                <div style={{ width: 120, marginRight: 20 }}>
                  <Progress
                    percent={Helpers.calculatePercentage(choice.votes, Helpers.reduceSum(choices, 'votes'))}
                    size="small"
                    status="active"
                    default="small"
                  />
                </div>
              </Skeleton>
            </Item>
          </RadioButton>
        )}
      />
    </RadioGroup>
  )
    ;
};

Choices.propTypes = {
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  choices: PropTypes.arrayOf(PropTypes.shape({
    choice: PropTypes.string,
    url: PropTypes.string,
    votes: PropTypes.number,
  })).isRequired,
};

export default Choices;
