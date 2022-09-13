import { ObjectSchema, ObjectShape, ValidationError, Assign } from 'yup'

interface ValidationResult {
  hasError: boolean
  errors: Record<string, string>
}

interface Errors {
  [key: string]: string
}

type WeakSchema<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in keyof T]: any
}

export function getValidationErrors(err: ValidationError): Errors {
  const ValidationErrors: Errors = {}

  err.inner.forEach((error) => {
    ValidationErrors[error?.path || ''] = error.message
  })

  return ValidationErrors
}

export async function validateFormData<FormData extends ObjectShape>(
  validator: ObjectSchema<Assign<ObjectShape, WeakSchema<FormData>>>,
  data: FormData,
): Promise<ValidationResult> {
  let hasError = false
  let errors = {}

  try {
    await validator.validate(data, {
      abortEarly: false,
    })
  } catch (err) {
    errors = getValidationErrors(err as ValidationError)
    hasError = true
  }

  return {
    errors,
    hasError,
  }
}
