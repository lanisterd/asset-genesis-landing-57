
/**
 * Utility functions for handling form submissions
 */

interface EmailData {
  to: string;
  subject: string;
  body: string;
}

/**
 * Sends form data via email
 * Note: This is a mock implementation. In production, this would connect to a backend service.
 */
export const sendFormByEmail = async (data: EmailData): Promise<boolean> => {
  // Simulate API call with a timeout
  return new Promise((resolve) => {
    console.log("Sending email:", data);
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

/**
 * Format form data for sending
 */
export const formatFormData = (formData: Record<string, any>): string => {
  return Object.entries(formData)
    .map(([key, value]) => {
      if (value === undefined || value === null) return '';
      if (key === 'isHuman') return ''; // Skip the human check field
      
      // Handle date objects
      if (value instanceof Date) {
        value = value.toLocaleString();
      }
      
      return `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
    })
    .filter(Boolean) // Remove empty strings
    .join('\n\n');
};

/**
 * Generate subject line based on form data
 */
export const generateSubject = (formData: Record<string, any>): string => {
  const { inquiryType, name } = formData;
  
  const typeLookup: Record<string, string> = {
    bookCall: 'Call Request',
    exploreServices: 'Service Inquiry',
    portfolio: 'Portfolio Inquiry',
    general: 'General Inquiry'
  };
  
  return `${typeLookup[inquiryType] || 'Website Inquiry'} from ${name || 'Website Visitor'}`;
};
