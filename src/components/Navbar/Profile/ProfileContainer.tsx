import React from 'react';
import {StoreContext} from "../../../store/reactContext";
import {Profile} from "./Profile";

export const ProfileContainer = () => {

    return (
      <StoreContext.Consumer>
          {
              (store) => {
                  if(store !== null) {
                      return (
                          <Profile store={store}/>
                      )
                  }
              }
      }
      </StoreContext.Consumer>
    );
};

