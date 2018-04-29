import React, { Fragment } from "react";
import Section from "./Section";
import Item from "./Item";

const Example = ({ show, single }) => {
  if (show === "one") {
    return (
      <Section
        title="Single child"
        description="In this case there's only one item as children."
      >
        <Item dotColor="red" label="I'm alone" />
      </Section>
    );
  } else if (show === "multiple") {
    return (
      <Section
        title="Multiple children"
        description="In this case there are multiple items, they are cloned with a prop which disables the border for the first item."
      >
        <Item dotColor="green" label="I dont have a border on the top" />
        <Item dotColor="red" label="I do have a border" />
        <Item dotColor="blue" label="And so do I" />
      </Section>
    );
  } else if (show === "conditionally") {
    return (
      <Section
        title="Multiple children as variable/conditional"
        description="In this case there are multiple items or only one depending on a prop. The former are wrapped in <Fragment>."
      >
        {single ? (
          <Item dotColor="red" label="I'm alone and i'm fine" />
        ) : (
          <Fragment>
            <Item
              dotColor="green"
              label="I should not have a border. Fragment is messing with me!"
            />
            <Item dotColor="red" label="I do have a border" />
            <Item dotColor="blue" label="And so do I" />
          </Fragment>
        )}
      </Section>
    );
  }
  return null;
};

export default Example;
