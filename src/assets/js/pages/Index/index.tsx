import { Tab, Tabs } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';

interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, index, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

const IndexPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Text" href="#text" />
        <Tab label="URL" href="#url" />
        <Tab label="Contact" href="#contact" />
        <Tab label="Phone" href="#phone" />
        <Tab label="SMS" href="#sms" />
        <Tab label="WiFi" href="#wifi" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Text
      </TabPanel>
      <TabPanel value={value} index={1}>
                URL
      </TabPanel>
      <TabPanel value={value} index={2}>
                Contact
      </TabPanel>
      <TabPanel value={value} index={3}>
                Phone
      </TabPanel>
      <TabPanel value={value} index={4}>
                SMS
      </TabPanel>
      <TabPanel value={value} index={5}>
                WiFi
      </TabPanel>
    </div>
  );
};

export default IndexPage;
