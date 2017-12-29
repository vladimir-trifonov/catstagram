import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

global.chai = chai
global.expect = chai.expect
global.should = chai.should()

configure({ adapter: new Adapter() })
global.fetch = require('jest-fetch-mock')