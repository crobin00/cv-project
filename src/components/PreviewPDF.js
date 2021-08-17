import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    margin: '15',
  },
  section: {
    flexGrow: 1,
  },
  nameHeader: {
    fontSize: '34',
    flexDirection: 'row',
  },
  infoHeader: {
    fontSize: '24',
    flexDirection: 'row',
  },
});

const PreviewPDF = (props) => {
  return (
    <Document onRender={() => console.log('rendered')}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.nameHeader}>
            <Text>{props.personalInformation.firstName}</Text>
            <Text style={{ marginLeft: '10' }}>
              {props.personalInformation.lastName}
            </Text>
          </View>
          <View style={styles.infoHeader}>
            <View>
              <Text>
                <Text>Phone</Text>
                {props.personalInformation.phoneNumber}
              </Text>

              <Text>
                <Text>Address</Text>
                {props.personalInformation.city},
                <Text>{props.personalInformation.state}</Text>
              </Text>
            </View>
            <View>
              <Text>
                <Text>Email</Text>
                {props.personalInformation.email}
              </Text>
            </View>
          </View>
          {props.workExperience.map((item) => (
            <View key={item.id}>
              <Text>{item.jobTitle}</Text>
              <Text>{item.city}</Text>
              <Text>{item.companyName}</Text>
              <Text>{item.startDate}</Text>
              <Text>{item.endDate}</Text>
              <Text>{item.responsibilties}</Text>
            </View>
          ))}
          {props.education.map((item) => (
            <View key={item.id}>
              <Text>{item.degree}</Text>
              <Text>{item.city}</Text>
              <Text>{item.institution}</Text>
              <Text>{item.startDate}</Text>
              <Text>{item.endDate}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PreviewPDF;
