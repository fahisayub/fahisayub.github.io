import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';
import PropTypes from 'prop-types';

import '../styles.css';
import { Container } from '@chakra-ui/react';

export default class GithubCalendar extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    
  };
  componentDidMount() {
    GitHubCalendar(this.refs.container, this.props.name,{responsive:true});
  }
  render() {
    return (
      <Container
      bg='green.100'
      color='brand_secondary'
      borderRadius='20px'
      my='60px'
      maxW={['full','80%']} 
        className={
          'calendar' + (this.props.className ? ' ' + this.props.className : '')
        }
        {...this.props}
        ref="container"
      />
    );
  }
}