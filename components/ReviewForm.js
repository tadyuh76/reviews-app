import React from 'react';
import { TextInput, View, StyleSheet, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import CustomButton from '../components/CustomButton';

const reviewSchema = yup.object({
  title: yup.string().required().min(3),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      'is-num-1-5',
      'rating must be a number between 1 - 5!',
      (val) => Number(val) <= 5 && Number(val) >= 1
    ),
});

export default function ReviewForm({ submitHandler }) {
  return (
    <View style={styles.form}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, { resetForm }) => {
          submitHandler(values);
          resetForm();
        }}>
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              placeholder="Review title"
              onChangeText={handleChange('title')}
              value={values.title}
              style={styles.input}
              onBlur={handleBlur('title')}
            />
            <Text style={styles.errorText}>
              {touched.title && errors.title}
            </Text>

            <TextInput
              placeholder="Review body"
              onChangeText={handleChange('body')}
              value={values.body}
              style={styles.input}
              onBlur={handleBlur('title')}
              multiline
              minHeight={180}
            />
            <Text style={styles.errorText}>{touched.body && errors.body}</Text>

            <TextInput
              placeholder="Rating (1-5)"
              onChangeText={handleChange('rating')}
              value={values.rating}
              style={styles.input}
              onBlur={handleBlur('title')}
              keyboardType="number-pad"
            />
            <Text style={styles.errorText}>
              {touched.rating && errors.rating}
            </Text>

            <View style={styles.submitBtn}>
              <CustomButton title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  input: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 12,
  },
  submitBtn: {
    width: 100,
    alignSelf: "center",
    marginTop: 16,
  },
  errorText: {
    color: 'crimson',
    textAlign: 'center',
    marginBottom: 8,
  },
});
