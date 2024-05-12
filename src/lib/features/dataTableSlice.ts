import { DataType, FormDataType } from '@/app/[locale]/form/page'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

 

export const initialState  = [ ]

export const dataTable = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    addPostTable: (state, action:PayloadAction<any> ) => { 
    console.log("🚀 ~ action:", action)
    console.log("🚀 ~ state:", state)
 
          // const { key, name , gender , phone , nationality     } = action.payload;
       state.push(action.payload)
      
    },
    deletePost: (state, action: PayloadAction<number>) => { 
      // return state.filter((item) => item.key !== action.payload)
    },

   
  },
})

// Action creators are generated for each case reducer function
export const { addPostTable } = dataTable.actions

export default dataTable.reducer