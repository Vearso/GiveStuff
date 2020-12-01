import {createSlice} from "@reduxjs/toolkit";

const foundations = {
    description: ' W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
    list: [
        {
            id: 1,
            title: 'Fundacja "Dbam o zdrowie" ',
            purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
            stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            id: 2,
            title: 'Fundacja "Dla dzieci"',
            purpose: 'Pomoc dzieciom z ubogich rodzin,',
            stuff: 'ubrania, meble, zabawki',
        },
        {
            id: 3,
            title: 'Fundacja "Bez domu"',
            purpose: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
            stuff: 'ubrania, jedzenie, ciepłe koce',
        },
        {
            id: 4,
            title: 'Fundacja "Dbam o zdrowie2" ',
            purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
            stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            id: 5,
            title: 'Fundacja "Dla dzieci2"',
            purpose: 'Pomoc dzieciom z ubogich rodzin,',
            stuff: 'ubrania, meble, zabawki',
        },
        {
            id: 6,
            title: 'Fundacja "Bez domu2"',
            purpose: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
            stuff: 'ubrania, jedzenie, ciepłe koce',
        },
        {
            id: 7,
            title: 'Fundacja "Dbam o zdrowie3" ',
            purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
            stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            id: 8,
            title: 'Fundacja "Dla dzieci3"',
            purpose: 'Pomoc dzieciom z ubogich rodzin,',
            stuff: 'ubrania, meble, zabawki',
        },
        {
            id: 9,
            title: 'Fundacja "Bez domu3"',
            purpose: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
            stuff: 'ubrania, jedzenie, ciepłe koce',
        }
    ]
}
const organizations = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    list: [
        {
            id: 1,
            title: 'Organizacja Lorem Ipsum 1',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            stuff: 'Egestas, sed, tempus'
        },
        {
            id: 2,
            title: 'Organizacja Lorem Ipsum 2',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            stuff: 'Egestas, sed, tempus'
        },
        {
            id: 3,
            title: 'Organizacja Lorem Ipsum 3',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            stuff: 'Egestas, sed, tempus'
        },
        {
            id: 4,
            title: 'Organizacja Lorem Ipsum 4',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            stuff: 'Egestas, sed, tempus'
        },
        {
            id: 5,
            title: 'Organizacja Lorem Ipsum 5',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            stuff: 'Egestas, sed, tempus'
        },
        {
            id: 6,
            title: 'Organizacja Lorem Ipsum 6',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            stuff: 'Egestas, sed, tempus'
        },
    ]
}
const collections = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    list: [
        {
            id: 1,
            title: 'Zbiórka "Lorem Ipsum 1',
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            stuff: "Ut, aliquam, purus, sit, amet",
        },
        {
            id: 2,
            title: 'Zbiórka "Lorem Ipsum 2',
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            stuff: "Ut, aliquam, purus, sit, amet",
        },
        {
            id: 3,
            title: 'Zbiórka "Lorem Ipsum 3',
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            stuff: "Ut, aliquam, purus, sit, amet",
        },
    ]
}
export const listSlice = createSlice({
    name: 'list',
    initialState: {
        activeList: {
            description:'',
            list: [],
        },
        currentPage: 1,
    },
    reducers: {
        displayFoundations: state => {
            return {
                ...state,
                currentPage: 1,
                activeList: {...foundations}
            };
        },
        displayOrganizations: state => {
            return{
                ...state,
                currentPage: 1,
                activeList: {...organizations}
            };
        },
        displayCollections: state => {
            return{
                ...state,
                currentPage: 1,
                activeList: {...collections}
            };
        },
        setPage: (state,action) => {
            return {
                ...state,
                currentPage: action.payload,
            }
        }
    }
})

export const {displayFoundations, displayOrganizations, displayCollections, setPage} = listSlice.actions
export const selectList = state=> state.list.activeList;
export const selectPage = state => state.list.currentPage;
export default listSlice.reducer