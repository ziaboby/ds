export interface BadgeProps {
  /**
   * The text content of the badge
   */
  label: string;
  /**
   * The variant of the badge, which correspond to the resulting color
   */
  variant: 'neutral' | 'positive' | 'negative';
  /**
   * A more descriptive label for the badge
   */
  description?: string;
}
