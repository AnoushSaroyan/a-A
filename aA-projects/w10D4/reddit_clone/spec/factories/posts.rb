FactoryBot.define do
  factory :post do
    title { "MyString" }
    url { "MyString" }
    content { "MyText" }
    sub_id { 1 }
    user_id { 1 }
  end
end
