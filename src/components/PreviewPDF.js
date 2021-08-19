import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
import OpenSans from '../styles/fonts/OpenSans-Regular.ttf';
import OpenSansBold from '../styles/fonts/OpenSans-Bold.ttf';
import OpenSansItalic from '../styles/fonts/OpenSans-Italic.ttf';
import Briefcase from '../styles/images/briefcase.png';
import Graduationcap from '../styles/images/graduation-cap.png';
import { format } from 'date-fns';

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: OpenSans,
    },
    {
      src: OpenSansBold,
      fontWeight: 'bold',
    },
    {
      src: OpenSansItalic,
      fontStyle: 'italic',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    margin: '20 35',
    fontFamily: 'Open Sans',
  },
  nameHeader: {
    fontSize: '34',
    flexDirection: 'row',
    fontWeight: 'bold',
    color: '#187EAE',
  },
  info: {
    fontSize: '16',
    flexDirection: 'row',
  },
  caseIcon: {
    width: '20',
    height: '20',
    marginRight: '10',
  },
  capIcon: {
    width: '27',
    height: '27',
    marginRight: '10',
  },
});

const PreviewPDF = (props) => {
  return (
    <Document onRender={() => {}}>
      <Page size="A4" style={styles.page}>
        <View style={{ marginBottom: '20' }}>
          {/* Name */}
          <View>
            <View style={styles.nameHeader}>
              <Text>{props.personalInformation.firstName}</Text>
              <Text style={{ marginLeft: '10', marginBottom: '20' }}>
                {props.personalInformation.lastName}
              </Text>
            </View>

            {/* Phone Number */}
            <View style={styles.info}>
              <View>
                <View style={styles.info}>
                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginRight: '10',
                        marginBottom: '5',
                      }}
                    >
                      Phone
                    </Text>
                  </View>
                  <View>
                    <Text>{props.personalInformation.phoneNumber}</Text>
                  </View>
                </View>

                {/* City */}
                <View style={styles.info}>
                  <View>
                    <Text style={{ fontWeight: 'bold', marginRight: '10' }}>
                      Address
                    </Text>
                  </View>
                  <View>
                    <Text>{props.personalInformation.city}</Text>
                  </View>
                </View>
              </View>

              {/* Email */}
              <View style={[styles.info, { marginLeft: '20' }]}>
                <View>
                  <Text style={{ fontWeight: 'bold', marginRight: '10' }}>
                    Email
                  </Text>
                </View>
                <View>
                  <Text>{props.personalInformation.email}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.info, { marginBottom: '5' }]}>
          <Image src={Briefcase} style={styles.caseIcon}></Image>
          <Text
            style={{ color: '#187EAE', fontWeight: 'bold', fontSize: '20' }}
          >
            Work Experience
          </Text>
        </View>

        {/* Work Experience */}
        {props.workExperience.map((item) => (
          <View key={item.id} style={[styles.info, { marginBottom: '20' }]}>
            <View>
              <Text style={{ marginBottom: '5' }}>
                {format(new Date(item.startDate), 'MM/yyyy')} -{' '}
              </Text>
              <Text style={{ marginBottom: '5' }}>
                {format(new Date(item.endDate), 'MM/yyyy')}
              </Text>
            </View>
            <View style={{ marginLeft: '20' }}>
              <Text style={{ fontWeight: 'bold', marginBottom: '5' }}>
                {item.jobTitle}
              </Text>
              <Text style={{ marginBottom: '5' }}>{item.city}</Text>
              <Text style={{ marginBottom: '5' }}>{item.companyName}</Text>
              <Text style={{ marginBottom: '5' }}>{item.responsibilities}</Text>
            </View>
          </View>
        ))}

        <View style={[styles.info, { marginBottom: '5' }]}>
          <Image src={Graduationcap} style={styles.capIcon}></Image>
          <Text
            style={{ color: '#187EAE', fontWeight: 'bold', fontSize: '20' }}
          >
            Education
          </Text>
        </View>

        {/* Education */}
        {props.education.map((item) => (
          <View key={item.id} style={[styles.info, { marginBottom: '20' }]}>
            <View>
              <Text style={{ marginBottom: '5' }}>
                {format(new Date(item.startDate), 'MM/yyyy')} -{' '}
              </Text>
              <Text>{format(new Date(item.endDate), 'MM/yyyy')}</Text>
            </View>
            <View style={{ marginLeft: '20' }}>
              <Text style={{ fontWeight: 'bold', marginBottom: '5' }}>
                {item.degree}
              </Text>
              <Text style={{ marginBottom: '5' }}>{item.institution}</Text>
              <Text style={{ marginBottom: '5' }}>{item.city}</Text>
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default PreviewPDF;
