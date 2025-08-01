-- Create careers_applications table for storing job applications
CREATE TABLE public.careers_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT NOT NULL,
  experience_years INTEGER,
  cover_letter TEXT,
  resume_url TEXT,
  linkedin_url TEXT,
  portfolio_url TEXT,
  salary_expectation TEXT,
  availability_date DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.careers_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications
CREATE POLICY "Anyone can submit career applications" 
ON public.careers_applications 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_careers_applications_updated_at
BEFORE UPDATE ON public.careers_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();