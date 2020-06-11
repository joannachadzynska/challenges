import React, { useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllCharacters } from 'redux/actions/charactersAction';
import { NotFound } from 'pages';
import { CustomizedTable as Table } from 'components/+Table/Table';

export interface ContentProps {}

const Content: React.SFC<ContentProps> = () => {
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section>
      <Switch>
        <Route exact path="/">
          <Table />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
