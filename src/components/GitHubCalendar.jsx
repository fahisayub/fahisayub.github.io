import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';
import PropTypes from 'prop-types';

import '../styles.css';
import { Container, Heading } from '@chakra-ui/react';

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
      maxW={['full','80%']} 
      bg='green.100'
      my='60px'
      color='brand_secondary'
borderRadius='20px'
      >
<Heading>My GitHub Calendar</Heading>
      <Container
      maxW='full' 
      className={
        'calendar' + (this.props.className ? ' ' + this.props.className : '')
      }
      {...this.props}
      ref="container"
      />
      </Container>
    );
  }
}