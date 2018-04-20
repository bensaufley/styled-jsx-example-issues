import * as chai from 'chai';
import { configure } from 'enzyme';
import { default as Adapter } from 'enzyme-adapter-react-16';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';

import 'raf/polyfill';

process.env.NODE_ENV = 'test';

chai.use(sinonChai);

configure({ adapter: new Adapter() });

const { expect } = chai;

export { expect, sinon };
