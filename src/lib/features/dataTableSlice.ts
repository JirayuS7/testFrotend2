import { DataType, FormDataType } from '@/app/[locale]/form/page'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

 

export const initialState  =    []
 

export const dataTable = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    addItem  : (state, action:PayloadAction<any> ) => { 

      console.log("🚀 ~ action:", action?.payload)
     if(action.payload === undefined) return
         state.push(action.payload)
    
 
          // const { key, name , gender , phone , nationality     } = action.payload;

          // state.push({
        // state =  action.payload?.map((item: FormDataType) => { 
        //   return {
        //     key: item.key,
        //     name: item.firstName + ` ` + item.lastName, 
            
        //   } })
        
      
    },
    deletePost: (state, action: PayloadAction<number>) => { 
      // return state.filter((item) => item.key !== action.payload)
    },

   
  },
})

// Action creators are generated for each case reducer function
export const { addItem } = dataTable.actions

export default dataTable.reducer