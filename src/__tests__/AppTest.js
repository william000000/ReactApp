import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import { searchByCity, spinnerLoader, errorHandle } from '../redux/actions/searchAction';
import searchUrl from '../__mocks__/axios';
import OutputField from '../components/OutputField';
import SearchField from '../components/SearchField';
import Spinner from '../components/Spinner';
import SpeechVoice from '../components/SpeechVoice';
import searchReducer from '../redux/reducers/searchReducer';
import combineReducer from '../redux/reducers/index';


let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = { searchReducer: {
    countryInfo: {
        name: 'Rwanda',
        topLevelDomain: [
            '.rw'
        ],
        alpha2Code: 'RW',
        alpha3Code: 'RWA',
        callingCodes: [
            '250'
        ],
        capital: 'Kigali',
        altSpellings: [
            'RW',
            'Republic of Rwanda',
            'Repubulika y\'u Rwanda',
            'République du Rwanda'
        ],
        region: 'Africa',
        subregion: 'Eastern Africa',
        population: 11262564,
        latlng: [
            -2,
            30
        ],
        demonym: 'Rwandan',
        area: 26338,
        gini: 50.8,
        timezones: [
            'UTC+02:00'
        ],
        borders: [
            'BDI',
            'COD',
            'TZA',
            'UGA'
        ],
        nativeName: 'Rwanda',
        numericCode: '646',
        currencies: [
            'RWF'
        ],
        languages: [
            'rw',
            'en',
            'fr'
        ],
        translations: {
            de: 'Ruanda',
            es: 'Ruanda',
            fr: 'Rwanda',
            ja: 'ルワンダ',
            it: 'Ruanda'
        },
        relevance: '0'
    },
    input: null,
    error: null,
    spinnerLoader: false
} };

const testStore = state => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(
        createStore
    );
    return createStoreWithMiddleware(combineReducer, state);
};
store = testStore(mockData);
describe('Test with Enzyme', () => {
    test('Renders', () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });
});

describe('Search Action', () => {
    beforeEach(() => {
        moxios.install(searchUrl);
    });

    afterEach(() => {
        moxios.uninstall(searchUrl);
    });

    it('Should dispatch search successfully', async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: [{
                    name: 'Kigali'
                }]
            });
        });
        store = mockStore({});
        await store.dispatch(searchByCity('kigali')).then(async () => {
            const getActions = store.getActions();
            expect(getActions).toEqual(
                [
                    {
                        payload: true,
                        type: "SPINNER"
                    },
                    {
                        payload: {
                            name: "Kigali"
                        },
                        type: "FETCHDATA"
                    },
                    {
                        payload: false,
                        type: "SPINNER"
                    }
                ]
            );
        });
    });
});

describe('Expect to view output', () => {
    const wrapper = mount(
        <Provider store={store}>
            <OutputField/>
        </Provider>

    );
    it('should view all city info successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
describe('Expect to search', () => {
    const wrapper = mount(
        <Provider store={store}>
            <SearchField/>
        </Provider>

    );
    it('should search successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
describe('Expect to spell the word', () => {
    const wrapper = mount(
        <Provider store={store}>
            <SpeechVoice/>
        </Provider>

    );
    it('should  spell the word successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('Should test the spinner', () => {
    test('renders without crashing', () => {
        expect(shallow(<Spinner />)).toMatchSnapshot();
    });
});

describe('Test reducer', () => {
    it('Should mock fetch data successfully', () => {
        const action = {
            type: "FETCHDATA",
            payload: [mockData.countryInfo]
        };
        const initialState = {
            countryInfo: mockData.searchReducer,
            input: null,
            error: null,
            spinnerLoader: false
        };
        const state = initialState;
        const searchData = searchReducer(state, action);

        expect(searchData).toEqual({ countryInfo: [undefined], error: null, input: null, spinnerLoader: false });
    });

    it('Should mock spinner', () => {
        const action = {
            type: "SPINNER",
            payload: [mockData.countryInfo]
        };
        const initialState = {
            countryInfo: [],
            input: null,
            error: null,
            spinnerLoader: false
        };
        const state = initialState;
        const searchData = searchReducer(state, action);

        expect(searchData).toEqual({
            countryInfo: [],
            input: null,
            error: null,
            spinnerLoader: [undefined]
        });
    });

    it('Should mock error handler', () => {
        const action = {
            type: "ERROR_HANDLER",
            payload: [mockData.countryInfo]
        };
        const initialState = {
            countryInfo: [],
            input: null,
            error: null,
            spinnerLoader: false
        };
        const state = initialState;
        const searchData = searchReducer(state, action);
        expect(searchData).toEqual({
            countryInfo: [],
            input: null,
            error: [undefined],
            spinnerLoader: false
        });
    });
    it('Should mock error handler', () => {
        const action = {
            type: "SAVE_INPUT",
            payload: [mockData.countryInfo]
        };
        const initialState = {
            countryInfo: [],
            input: null,
            error: null,
            spinnerLoader: false
        };
        const state = initialState;
        const searchData = searchReducer(state, action);

        expect(searchData).toEqual({
            countryInfo: [],
            input: [undefined],
            error: null,
            spinnerLoader: false
        });
    });
});

