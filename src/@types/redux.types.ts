/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunk, UnknownAction } from '@reduxjs/toolkit';

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

export function isPendingAction(
  action: UnknownAction
): action is PendingAction {
  return typeof action.type === 'string' && action.type.endsWith('/pending');
}

export function isRejectedAction(
  action: UnknownAction
): action is RejectedAction {
  return typeof action.type === 'string' && action.type.endsWith('/rejected');
}
