import React, { Component } from 'react'
import { Pane, Tab, Icon, Text } from 'evergreen-ui'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ProjectListPage from './components/ProjectListPage'
import ProjectDetailPage from './components/ProjectDetailPage'
import ReportPage from './components/ReportPage'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Pane display='flex' paddingBottom={8} marginLeft={8} marginRight={8} borderBottom>
            <Pane flex={1} alignItems='center' display='flex'>
              <TabLink to='/projects' linkText='PROJECTS' icon='control' />
              <TabLink to='/reports' linkText='REPORTS' icon='dashboard' />
            </Pane>
            <Pane>
              <Tab height={36} paddingX={14}><Icon icon='manual' marginRight={12} /><Text size={400}>DOCS</Text></Tab>
              <Tab height={36} paddingX={14}><Icon icon='info-sign' marginRight={12} /><Text size={400}>ABOUT</Text></Tab>
            </Pane>
          </Pane>
          <Switch>
            <Route exact path='/' component={Projects} />
            <Route path='/projects/:projectId' component={Projects} />
            <Route path='/projects' component={Projects} />
            <Route path='/reports' component={Reports} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function Projects ({ match }) {
  return (
    <Pane paddingX={24} paddingY={10} marginTop={6} >
      {match.params.projectId
        ? <ProjectDetailPage projectId={match.params.projectId} />
        : <ProjectListPage />
      }
    </Pane>
  )
}

function Reports (props) {
  return (
    <Pane paddingX={24} paddingY={10} marginTop={6} >
      <ReportPage />
    </Pane>
  )
}

const TabLink = ({ to, linkText, icon, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <Link to={to} {...rest} >
        <Tab height={36} paddingX={14}><Icon icon={icon} marginRight={12} /><Text size={400}>{linkText}</Text></Tab>
      </Link>
    )
    }
  />
)
