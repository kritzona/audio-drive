import { ref } from 'vue';
import { VForm } from 'vuetify/components';

/**
 * Бизнес-логика для работы с формой
 *
 * @returns Свойства и методы для работы с формой
 */
export const useForm = () => {
  /**
   * Ссылка на компонент формы <v-form>
   */
  const form = ref<VForm>();

  /**
   * Состояние загрузки
   */
  const loading = ref<boolean>(false);

  /**
   * Валидация формы
   *
   * @async
   * @return Успешность валидации
   */
  const validate = async (): Promise<boolean> => {
    if (!form.value) {
      return Promise.reject();
    }

    const { valid } = await form.value.validate();

    return valid ? Promise.resolve(valid) : Promise.reject();
  };

  return {
    form,
    loading,

    validate,
  };
};
