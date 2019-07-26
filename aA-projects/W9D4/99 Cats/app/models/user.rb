class User < ApplicationRecord
  validates :user_name, :session_token, presence: true, uniqueness: true

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.update!(session_token: self.class.generate_session_token)
    self.session_token
  end


  def password=(password)
    @password = password
    password_digest = BCrypt::Password.create(password)  
  end


  def is_password?(password)
    bcrpt_pass = BCrypt::Password.new(password_digest)
    bcrpt_pass.is_password?(password)
  end


    def self.find_by_credentials(user_name, password)
        user = User.find_by(user_name: user_name)
        return user if user && user.is_password(password) 
        nil
    end
end


#  t.string "user_name", null: false/
    # t.string "password_digest"/
    # t.string "session_token", null: false/
    # t.datetime "created_at", null: false/
    # t.datetime "updated_at", null: false/
    # t.index ["session_token"], name: "index_users_on_session_token", unique: true/