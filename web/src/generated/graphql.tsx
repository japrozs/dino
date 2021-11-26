import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Folder = {
  __typename?: 'Folder';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  name: Scalars['String'];
  noteIds: Array<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNoteToFolder: Scalars['Boolean'];
  changePassword: UserResponse;
  createFolder: Scalars['Boolean'];
  createNote: Note;
  deleteFolder: Scalars['Boolean'];
  deleteNote: Scalars['Boolean'];
  deleteNoteFromFolder: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updateName: Scalars['Boolean'];
  updateNote: Scalars['Boolean'];
  updateNoteTitle: Scalars['Boolean'];
};


export type MutationAddNoteToFolderArgs = {
  folderId: Scalars['Int'];
  noteId: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateFolderArgs = {
  name: Scalars['String'];
};


export type MutationCreateNoteArgs = {
  title: Scalars['String'];
};


export type MutationDeleteFolderArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteNoteFromFolderArgs = {
  folderId: Scalars['Int'];
  noteId: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserInput;
};


export type MutationUpdateNameArgs = {
  name: Scalars['String'];
};


export type MutationUpdateNoteArgs = {
  body: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationUpdateNoteTitleArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Note = {
  __typename?: 'Note';
  body: Scalars['String'];
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  status: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getNote: Note;
  me?: Maybe<User>;
};


export type QueryGetNoteArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  folders: Array<Folder>;
  id: Scalars['Float'];
  imgUrl: Scalars['String'];
  name: Scalars['String'];
  notes: Array<Note>;
  theme: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularFolderFragment = { __typename?: 'Folder', id: number, name: string, noteIds: Array<string>, creatorId: number, createdAt: string, updatedAt: string };

export type RegularNoteFragment = { __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string };

export type RegularUserFragment = { __typename: 'User', id: number, name: string, theme: string, imgUrl: string, email: string, createdAt: string, updatedAt: string, notes: Array<{ __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string }>, folders: Array<{ __typename?: 'Folder', id: number, name: string, noteIds: Array<string>, creatorId: number, createdAt: string, updatedAt: string }> };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename: 'User', id: number, name: string, theme: string, imgUrl: string, email: string, createdAt: string, updatedAt: string, notes: Array<{ __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string }>, folders: Array<{ __typename?: 'Folder', id: number, name: string, noteIds: Array<string>, creatorId: number, createdAt: string, updatedAt: string }> } | null | undefined };

export type AddNoteToFolderMutationVariables = Exact<{
  folderId: Scalars['Int'];
  noteId: Scalars['Int'];
}>;


export type AddNoteToFolderMutation = { __typename?: 'Mutation', addNoteToFolder: boolean };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename: 'User', id: number, name: string, theme: string, imgUrl: string, email: string, createdAt: string, updatedAt: string, notes: Array<{ __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string }>, folders: Array<{ __typename?: 'Folder', id: number, name: string, noteIds: Array<string>, creatorId: number, createdAt: string, updatedAt: string }> } | null | undefined } };

export type CreateFolderMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateFolderMutation = { __typename?: 'Mutation', createFolder: boolean };

export type CreateNoteMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createNote: { __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string } };

export type DeleteFolderMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteFolderMutation = { __typename?: 'Mutation', deleteFolder: boolean };

export type DeleteNoteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', deleteNote: boolean };

export type DeleteNoteFromFolderMutationVariables = Exact<{
  folderId: Scalars['Int'];
  noteId: Scalars['Int'];
}>;


export type DeleteNoteFromFolderMutation = { __typename?: 'Mutation', deleteNoteFromFolder: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename: 'User', id: number, name: string, theme: string, imgUrl: string, email: string, createdAt: string, updatedAt: string, notes: Array<{ __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string }>, folders: Array<{ __typename?: 'Folder', id: number, name: string, noteIds: Array<string>, creatorId: number, createdAt: string, updatedAt: string }> } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename: 'User', id: number, name: string, theme: string, imgUrl: string, email: string, createdAt: string, updatedAt: string, notes: Array<{ __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string }>, folders: Array<{ __typename?: 'Folder', id: number, name: string, noteIds: Array<string>, creatorId: number, createdAt: string, updatedAt: string }> } | null | undefined } };

export type UpdateNameMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type UpdateNameMutation = { __typename?: 'Mutation', updateName: boolean };

export type UpdateNoteMutationVariables = Exact<{
  id: Scalars['Int'];
  body: Scalars['String'];
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateNote: boolean };

export type UpdateNoteTitleMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
}>;


export type UpdateNoteTitleMutation = { __typename?: 'Mutation', updateNoteTitle: boolean };

export type GetNoteQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetNoteQuery = { __typename?: 'Query', getNote: { __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename: 'User', id: number, name: string, theme: string, imgUrl: string, email: string, createdAt: string, updatedAt: string, notes: Array<{ __typename?: 'Note', id: number, title: string, body: string, status: string, creatorId: number, createdAt: string, updatedAt: string }>, folders: Array<{ __typename?: 'Folder', id: number, name: string, noteIds: Array<string>, creatorId: number, createdAt: string, updatedAt: string }> } | null | undefined };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularNoteFragmentDoc = gql`
    fragment RegularNote on Note {
  id
  title
  body
  status
  creatorId
  createdAt
  updatedAt
}
    `;
export const RegularFolderFragmentDoc = gql`
    fragment RegularFolder on Folder {
  id
  name
  noteIds
  creatorId
  createdAt
  updatedAt
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  theme
  imgUrl
  email
  createdAt
  updatedAt
  notes {
    ...RegularNote
  }
  folders {
    ...RegularFolder
  }
  __typename
}
    ${RegularNoteFragmentDoc}
${RegularFolderFragmentDoc}`;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const AddNoteToFolderDocument = gql`
    mutation addNoteToFolder($folderId: Int!, $noteId: Int!) {
  addNoteToFolder(folderId: $folderId, noteId: $noteId)
}
    `;
export type AddNoteToFolderMutationFn = Apollo.MutationFunction<AddNoteToFolderMutation, AddNoteToFolderMutationVariables>;

/**
 * __useAddNoteToFolderMutation__
 *
 * To run a mutation, you first call `useAddNoteToFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNoteToFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNoteToFolderMutation, { data, loading, error }] = useAddNoteToFolderMutation({
 *   variables: {
 *      folderId: // value for 'folderId'
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useAddNoteToFolderMutation(baseOptions?: Apollo.MutationHookOptions<AddNoteToFolderMutation, AddNoteToFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNoteToFolderMutation, AddNoteToFolderMutationVariables>(AddNoteToFolderDocument, options);
      }
export type AddNoteToFolderMutationHookResult = ReturnType<typeof useAddNoteToFolderMutation>;
export type AddNoteToFolderMutationResult = Apollo.MutationResult<AddNoteToFolderMutation>;
export type AddNoteToFolderMutationOptions = Apollo.BaseMutationOptions<AddNoteToFolderMutation, AddNoteToFolderMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateFolderDocument = gql`
    mutation createFolder($name: String!) {
  createFolder(name: $name)
}
    `;
export type CreateFolderMutationFn = Apollo.MutationFunction<CreateFolderMutation, CreateFolderMutationVariables>;

/**
 * __useCreateFolderMutation__
 *
 * To run a mutation, you first call `useCreateFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFolderMutation, { data, loading, error }] = useCreateFolderMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateFolderMutation(baseOptions?: Apollo.MutationHookOptions<CreateFolderMutation, CreateFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFolderMutation, CreateFolderMutationVariables>(CreateFolderDocument, options);
      }
export type CreateFolderMutationHookResult = ReturnType<typeof useCreateFolderMutation>;
export type CreateFolderMutationResult = Apollo.MutationResult<CreateFolderMutation>;
export type CreateFolderMutationOptions = Apollo.BaseMutationOptions<CreateFolderMutation, CreateFolderMutationVariables>;
export const CreateNoteDocument = gql`
    mutation createNote($title: String!) {
  createNote(title: $title) {
    ...RegularNote
  }
}
    ${RegularNoteFragmentDoc}`;
export type CreateNoteMutationFn = Apollo.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>;

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, options);
      }
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = Apollo.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = Apollo.BaseMutationOptions<CreateNoteMutation, CreateNoteMutationVariables>;
export const DeleteFolderDocument = gql`
    mutation deleteFolder($id: Int!) {
  deleteFolder(id: $id)
}
    `;
export type DeleteFolderMutationFn = Apollo.MutationFunction<DeleteFolderMutation, DeleteFolderMutationVariables>;

/**
 * __useDeleteFolderMutation__
 *
 * To run a mutation, you first call `useDeleteFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFolderMutation, { data, loading, error }] = useDeleteFolderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFolderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFolderMutation, DeleteFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFolderMutation, DeleteFolderMutationVariables>(DeleteFolderDocument, options);
      }
export type DeleteFolderMutationHookResult = ReturnType<typeof useDeleteFolderMutation>;
export type DeleteFolderMutationResult = Apollo.MutationResult<DeleteFolderMutation>;
export type DeleteFolderMutationOptions = Apollo.BaseMutationOptions<DeleteFolderMutation, DeleteFolderMutationVariables>;
export const DeleteNoteDocument = gql`
    mutation deleteNote($id: Int!) {
  deleteNote(id: $id)
}
    `;
export type DeleteNoteMutationFn = Apollo.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>;

/**
 * __useDeleteNoteMutation__
 *
 * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteNoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoteMutation, DeleteNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(DeleteNoteDocument, options);
      }
export type DeleteNoteMutationHookResult = ReturnType<typeof useDeleteNoteMutation>;
export type DeleteNoteMutationResult = Apollo.MutationResult<DeleteNoteMutation>;
export type DeleteNoteMutationOptions = Apollo.BaseMutationOptions<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const DeleteNoteFromFolderDocument = gql`
    mutation deleteNoteFromFolder($folderId: Int!, $noteId: Int!) {
  deleteNoteFromFolder(folderId: $folderId, noteId: $noteId)
}
    `;
export type DeleteNoteFromFolderMutationFn = Apollo.MutationFunction<DeleteNoteFromFolderMutation, DeleteNoteFromFolderMutationVariables>;

/**
 * __useDeleteNoteFromFolderMutation__
 *
 * To run a mutation, you first call `useDeleteNoteFromFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteFromFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteFromFolderMutation, { data, loading, error }] = useDeleteNoteFromFolderMutation({
 *   variables: {
 *      folderId: // value for 'folderId'
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useDeleteNoteFromFolderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoteFromFolderMutation, DeleteNoteFromFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNoteFromFolderMutation, DeleteNoteFromFolderMutationVariables>(DeleteNoteFromFolderDocument, options);
      }
export type DeleteNoteFromFolderMutationHookResult = ReturnType<typeof useDeleteNoteFromFolderMutation>;
export type DeleteNoteFromFolderMutationResult = Apollo.MutationResult<DeleteNoteFromFolderMutation>;
export type DeleteNoteFromFolderMutationOptions = Apollo.BaseMutationOptions<DeleteNoteFromFolderMutation, DeleteNoteFromFolderMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UserInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateNameDocument = gql`
    mutation updateName($name: String!) {
  updateName(name: $name)
}
    `;
export type UpdateNameMutationFn = Apollo.MutationFunction<UpdateNameMutation, UpdateNameMutationVariables>;

/**
 * __useUpdateNameMutation__
 *
 * To run a mutation, you first call `useUpdateNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNameMutation, { data, loading, error }] = useUpdateNameMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNameMutation, UpdateNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNameMutation, UpdateNameMutationVariables>(UpdateNameDocument, options);
      }
export type UpdateNameMutationHookResult = ReturnType<typeof useUpdateNameMutation>;
export type UpdateNameMutationResult = Apollo.MutationResult<UpdateNameMutation>;
export type UpdateNameMutationOptions = Apollo.BaseMutationOptions<UpdateNameMutation, UpdateNameMutationVariables>;
export const UpdateNoteDocument = gql`
    mutation updateNote($id: Int!, $body: String!) {
  updateNote(id: $id, body: $body)
}
    `;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, options);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const UpdateNoteTitleDocument = gql`
    mutation updateNoteTitle($id: Int!, $title: String!) {
  updateNoteTitle(id: $id, title: $title)
}
    `;
export type UpdateNoteTitleMutationFn = Apollo.MutationFunction<UpdateNoteTitleMutation, UpdateNoteTitleMutationVariables>;

/**
 * __useUpdateNoteTitleMutation__
 *
 * To run a mutation, you first call `useUpdateNoteTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteTitleMutation, { data, loading, error }] = useUpdateNoteTitleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateNoteTitleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteTitleMutation, UpdateNoteTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteTitleMutation, UpdateNoteTitleMutationVariables>(UpdateNoteTitleDocument, options);
      }
export type UpdateNoteTitleMutationHookResult = ReturnType<typeof useUpdateNoteTitleMutation>;
export type UpdateNoteTitleMutationResult = Apollo.MutationResult<UpdateNoteTitleMutation>;
export type UpdateNoteTitleMutationOptions = Apollo.BaseMutationOptions<UpdateNoteTitleMutation, UpdateNoteTitleMutationVariables>;
export const GetNoteDocument = gql`
    query getNote($id: Int!) {
  getNote(id: $id) {
    ...RegularNote
  }
}
    ${RegularNoteFragmentDoc}`;

/**
 * __useGetNoteQuery__
 *
 * To run a query within a React component, call `useGetNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNoteQuery(baseOptions: Apollo.QueryHookOptions<GetNoteQuery, GetNoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNoteQuery, GetNoteQueryVariables>(GetNoteDocument, options);
      }
export function useGetNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoteQuery, GetNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNoteQuery, GetNoteQueryVariables>(GetNoteDocument, options);
        }
export type GetNoteQueryHookResult = ReturnType<typeof useGetNoteQuery>;
export type GetNoteLazyQueryHookResult = ReturnType<typeof useGetNoteLazyQuery>;
export type GetNoteQueryResult = Apollo.QueryResult<GetNoteQuery, GetNoteQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;