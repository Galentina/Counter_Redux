

export const counterActions = Object.freeze({

    addCounter: (id) => {
      return {
          type: "ADD_COUNTER",
          payload: id,
      }
    },
    mathPlus: (data) => {
        return {
            type: "PLUS",
            payload: data,
        }
    },
    mathMinus: (data) => {
        return {
            type: "MINUS",
            payload: data,
        }
    },
    delCounter: (data) => {
        return {
            type: "DELETE_COUNTER",
            payload: data,
        }
    }
});
