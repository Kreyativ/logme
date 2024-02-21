import { Feather } from '@expo/vector-icons';
import type { CheckboxProps, SizeTokens } from 'tamagui';
import { Checkbox, Label, XStack } from 'tamagui';

type CheckboxWithLabelProps = {
  size: SizeTokens | any;
  label?: string;
  checked?: boolean;
} & CheckboxProps;

const CheckboxWithLabel = ({ size, label, checked, ...checkboxProps }: CheckboxWithLabelProps) => {
  // const id = `checkbox-${size.toString().slice(1)}`;
  const id = `checkbox-${Math.random().toString(36)}`;

  return (
    <XStack alignItems="center" space="$4">
      <Checkbox id={id} size={size} {...checkboxProps} checked={checked}>
        <Checkbox.Indicator>
          <Feather name="check" size={16} color="green" />
        </Checkbox.Indicator>
      </Checkbox>

      {label && (
        <Label size={size} htmlFor={id}>
          {label}
        </Label>
      )}
    </XStack>
  );
};

export default CheckboxWithLabel;
