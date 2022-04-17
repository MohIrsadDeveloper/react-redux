Redux =>  Redux is a state management Library.
There are 4 main Concept of redux
1. Action
2. Action Creator
3. Reducer
4. Store
  1. Action => Action are js object which contain "type" property
  Ex. const a = { type : "LOGIN"} // Action
      const b = { name1 : "abdul", name2 : "asma"}
  2. Action Creator => Action Creator are functions which return action.
  Ex . const Z = () => {
      return {
          type : "LOGOUT"
      }
  }
  3. Reducers => Reducers are functon which takes 2 Argument (previousState, action) and returns newState;
Ex. let b = (previousState, action) => {
        return newState;
    }
    let 