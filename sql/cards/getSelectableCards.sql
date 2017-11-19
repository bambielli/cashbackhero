WITH t as (
  SELECT * from user_cards where user_id=${user_id}
)
SELECT cards.id, name FROM cards
LEFT JOIN t ON cards.id = t.card_id
WHERE t.card_id IS NULL;