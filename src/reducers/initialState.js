const initialState = {
    travel: {
        travelList: [],
        newTravel: {
                origin: '',
                destination: '',
                dateOrigin: '',
                dateReturn: '',
            },
    },
    ui: {
            isSubmitHidden: true
        }
}
 
export default initialState;