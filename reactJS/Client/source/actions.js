/**
 * Created by ZeroZhang on 8/9/2016.
 */

export const ADD_DATA_ITEM = "ADD_DATA_ITEM";
export const REMOVE_DATA_ITEM = "REMOVE_DATA_ITEM";
export const UPDATE_DATA_CONTENT = "UPDATE_DATA_CONTENT";
export const CAN_DELETE_ITEM = "CAN_DELETE_ITEM";
export const CAN_EDIT_TEXT = "CAN_EDIT_TEXT";
export const IS_SHOW_INQUIRE_DIV = "IS_SHOW_INQUIRE_DIV";

export function addDataItem(dataItem) {
    return {
        type: ADD_DATA_ITEM,
        dataItem
    }
}

export function removeDataItem(itemIndex) {
    return {
        type: REMOVE_DATA_ITEM,
        itemIndex
    }
}

export function updateDataContent(rowIndex, colIndex, newData) {
    return {
        type: UPDATE_DATA_CONTENT,
        rowIndex,
        colIndex,
        newData
    }
}

export function canDeleteItem() {
    return {
        type: CAN_DELETE_ITEM
    }
}

export function canEditText() {
    return {
        type: CAN_EDIT_TEXT
    }
}

export function isShowInquireDiv() {
    return {
        type: IS_SHOW_INQUIRE_DIV
    }
}