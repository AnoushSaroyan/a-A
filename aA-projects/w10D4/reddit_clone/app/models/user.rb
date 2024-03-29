class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true 
    validates :username, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token

    attr_reader :password 
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64 
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && user.is_password?(password)
        nil
    end

    def generate_session_token!
        SecureRandom.urlsafe_base64(16)
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def reset_session_token! 
        self.update!(session_token: generate_session_token!)
        self.session_token
    end
end
